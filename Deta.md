#How to deploy your api to deta.sh
1. Create a free account on [deta.sh](https://www.deta.sh/)
1. Download deta CLI for windows
open powershell and run:
    ```powershell
    iwr https://get.deta.dev/cli.ps1 -useb | iex
    ```
1. Login your CLI to deta:
    ```powershell
    deta login
    ```
1. To add your project to deta, go to your project root directory in powershell and run:
    ```powershell
    deta new
    ```
1. Add your environment variables:
    ```powershell
    deta update -e .env
    ```
1. Deploy your changes:
    ```powershell
    deta deploy
    ```
1. Check your logs:
    ```powershell
    deta logs
    ```
1. In case of having trouble, open the visor (more logs at the deta.sh portal):
    ```powershell
    deta visor enable
    deta visor open
    ```
Finally to test your apis you need to navigate to an endpoint, you can find the endpoint by running this:
```powershell
deta details
```
If all steps above were done correctly, it should return something like this:
```json
{
        "name": "Node-simple-test-mongodb-auth",
        "id": "053e96a2-2438-4efd-b34e-20d0716cdae2",
        "project": "default",
        "runtime": "nodejs14.x",
        "endpoint": "https://a72fso.deta.dev",
        "region": "eu-central-1",
        "dependencies": [
                "dotenv@^16.0.3",
                "express@^4.18.2",
                "mongoose@^6.7.3",
                "nodemon@^2.0.20",
                "bcryptjs@^2.4.3",
                "cors@^2.8.5"
        ],
        "environment_variables": [
                "PORT",
                "MONGO_URL",
                "KEY"
        ],
        "visor": "enabled",
        "http_auth": "disabled"
}
```
Copy your endpoint and test at your browser/postman:
"endpoint": "https://a72fso.deta.dev"

For more info go to: [https://docs.deta.sh/docs/micros/getting_started](https://docs.deta.sh/docs/micros/getting_started)