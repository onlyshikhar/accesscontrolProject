module.exports = {
    config: {
        user: 'sa',
        password: 'niit@123',
        server: '192.168.252.174',
        database: 'ntlniitess_bkp',
        options: { encrypt: false }
    },
    query: `SELECT EMPNO,NAME,DOJ,DESIGNATION,PRACTICE,OUTXT,PSATXT,SUPERVCODE FROM ZEMP_MAST_WEB_AL WHERE BASEEMP='`,
    port: '4009',
   messages: {
       approver_get: 'fetching approver of the access card details',
       approver_post: 'inserting approver of the access card details',
       damagecard_get: 'fetching damage card details',
       damagecard_post: 'inserting damage card details',
       getemployee: 'fetching employee card details',
       verify_super: 'verifying supervisor',
       location_get: 'fetching details of location change ',
       location_post: 'inserting details of location change',
       lostcard_get: 'fetching lost card details',
       lostcard_post: 'inserting lost card details',
       location_get: 'fetching location change details',
       location_post: 'inserting location change details',
       thirdparty_get: 'fetching third party details',
       thirdparty_post: 'inserting third party details',
       requester_get: 'fetching new access card requester details',
       requesterID_get: 'fetching new access card employeeID details',
       requester_post: 'inserting new access card requester details',
       show_employee: 'show the employee data',
       approver_get_error: 'error in hitting access card details api',
       approver_post_error: 'error in inserting access card details api',
       damage_get_error:'error in hitting damage card details api',
       damage_post_error:'error in inserting damage card details api',
       location_get_error: 'error in hitting location card details api',
       location_post_error: 'error in inserting location card details api',
       lostcard_get_error: 'error in hitting lostcard card details api',
       lostcard_post_error: 'error in inserting lostcard card details api',
       requester_get_error: 'error in hitting requester card details api',
       requester_getID_error:'error in hitting requester card details of particular employee',
       requester_post_error: 'error in inserting requester card details api',
       requester_show_error:'error in showing requester card details api',
       thirdparty_get_error:'error in hitting thirdparty card details api',
       thirdparty_post_error:'error in inserting thirdparty card details api',
       servererror:'server is not working properly',
       employeedata:'getting employee data',

   }
};