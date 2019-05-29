module.exports = {
  apps: [{
    name: 'Add-To-Bag',
    script: './server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-219-73-212.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/shopping-cart.pem',
      ref: 'origin/master',
      repo: 'git@github.com:fasho-va/Add-To-Bag.git',
      path: '/home/ubuntu/shopping-cart',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}