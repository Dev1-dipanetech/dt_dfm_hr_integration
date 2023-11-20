// Copyright (c) 2023, Dipane Technologies Pvt Ltd and contributors
// For license information, please see license.txt

frappe.ui.form.on('DFM HR Log', {
	refresh: function(frm) {
		$('.primary-action').hide();
		$('.btn-secondary').hide();
	}
});
