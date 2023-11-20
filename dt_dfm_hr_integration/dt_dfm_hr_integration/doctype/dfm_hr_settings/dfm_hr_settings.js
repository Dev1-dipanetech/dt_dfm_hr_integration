// Copyright (c) 2023, Dipane Technologies Pvt Ltd and contributors
// For license information, please see license.txt

frappe.ui.form.on('DFM HR Settings', {
	refresh: function(frm) {
        frm.add_custom_button('Manual Sync From SFTP', function() {
            frappe.call({
                method: 'dt_dfm_hr_integration.dt_dfm_hr_integration.doctype.dfm_hr_settings.dfm_hr_settings.cron',
                callback: function(response) {
                    
                }
            });
        });
    },

    download_template: function(frm) {
        frappe.call({
            method: 'dt_dfm_hr_integration.dt_dfm_hr_integration.doctype.dfm_hr_settings.dfm_hr_settings.download_template',
            callback: function(response) {
                if (response.message) {
                    var file_url = response.message.file_url;
                    frappe.msgprint(__("Download Sample Template. <a href='{0}' target='_blank'>Click here to view</a>.", [file_url]));
                }
            }
        });
    }
});
