exports.addLead = function (req, res) {
    var agent_id = req.body.agent_id,
        lead = req.body.lead,
        result = {};
/*
    console.log('input data is: %j',req.body);
    console.log('agent id is : %s', agent_id);
    console.log('lead id is : %j' , lead);
*/
    //verify input from request body.
    if(agent_id){
        if(lead && (lead.first_name || lead.last_name)){
            result = {
                agent_id: agent_id,
                lead: lead
            };

            //todo: call db module to add lead
        }
        else{
            result.err = "there is no name for the lead.";
        }
    }
    else{
        result.err = "agent id is empty.";
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
};

