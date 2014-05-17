/**
 * Created by Russell on 5/17/2014.
 */
var config = require('./config').getConfig();

exports.validateIP = function(req, res, next)
{
    if(config.apiAccessIp.indexOf(req.ip) == -1)
    {
        res.status(401);
        return res.end();
    }

    next();
}