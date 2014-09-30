
'use strict';

module.exports = function (models, baucis) {
    var controller = baucis.rest(models.user);
    controller.select('-password -passwordHash -HYusername');
};
