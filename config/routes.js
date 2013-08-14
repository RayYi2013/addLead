var controllersPath = '../app/controllers/';

exports.initializeRoutes = function (app) {
    leadRoutes(app);
}

function leadRoutes(app) {
    var lead = require(controllersPath + 'leadController');
    app.post('/lead', lead.addLead);
};

