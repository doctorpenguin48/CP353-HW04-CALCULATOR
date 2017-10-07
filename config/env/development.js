module.exports = {
    //mongoUri: 'mongodb://localhost/myFirstNode',
    // or use 
    mongoUri: 'mongodb://admin:password@localhost:27017/testDB',
    debug: true,
    sessionSecret: 'dev_secret_key',
    google: {
        clientID: '638084117819-2jgp7s7b3dap8l707vd90ve5kfbckou2.apps.googleusercontent.com',
        clientSecret: 'EMpSMfhL8lqIzItPhb7kayNl',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
 }
}
