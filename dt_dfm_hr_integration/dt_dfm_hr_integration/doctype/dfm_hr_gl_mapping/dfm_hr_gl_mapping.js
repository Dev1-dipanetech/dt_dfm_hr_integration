// Copyright (c) 2023, Dipane Technologies Pvt Ltd and contributors
// For license information, please see license.txt

frappe.ui.form.on('DFM HR GL Mapping', {
	refresh: function(frm) {
		frm.set_query('department_name', function() {
            return {
                filters: {
					'company': frm.doc.company
                }
            };
        });


		frm.fields_dict.dfm_hr_gl_details.grid.get_field('account').get_query = function(doc, cdt, cdn) {
            var child = locals[cdt][cdn];
            return {
                filters: {
					'company': frm.doc.company,
                    'disabled': 0
                }
            };
        };
	}
});
