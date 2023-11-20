# Copyright (c) 2023, Dipane Technologies Pvt Ltd and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class DFMHRGLMapping(Document):
	def validate(doc):
		
		unique_salary_heads = set()
		
		for detail in doc.get("dfm_hr_gl_details", []):
			salary_head = detail.get("salary_head")

			if salary_head in unique_salary_heads:
				frappe.throw(f"Duplicate Salary Head <b>{salary_head}</b> found in DFM HR GL Mapping. Each Salary Head must be unique within the document.")
			else:
				unique_salary_heads.add(salary_head)
		


		existing_doc = get_existing_document(doc.company, doc.department, doc.dfm_hr_grade)

		if existing_doc and existing_doc.name != doc.name:
			frappe.throw(f"A document with the same company, department, and grade already exists. <a href='/app/dfm-hr-gl-mapping/{existing_doc.name}'>{existing_doc.name}</a>")



def get_existing_document(company, department, dfm_hr_grade):
    # Fetch documents with the same company, department, and dfm_hr_grade values
    existing_docs = frappe.get_all("DFM HR GL Mapping", filters={
        "company": company,
        "department": department,
        "dfm_hr_grade": dfm_hr_grade,
    }, fields=["name"])

    if existing_docs:
        return existing_docs[0]

    return None