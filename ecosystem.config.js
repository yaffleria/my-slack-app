module.exports = {
  apps: [
    {
      name: 'my-slack-app',
      script: 'dist/main.js', // Path to the compiled entry file
      instances: 1,
      autorestart: true,
      watch: false, // Or true, but not recommended for production
      max_memory_restart: '1G',
    },
  ],
}
