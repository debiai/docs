# Running DebiAI in development mode

## Requirements

- [npm](https://nodejs.org/en/download/)
- [python3](https://www.python.org/downloads/)
- [pip](https://pip.pypa.io/en/stable/)

## Installation

First of all, you need to clone the DebiAI application project on your machine.

```bash
git clone https://github.com/debiai/debiai.git
```

### Frontend

Then run the frontend server.

```bash
cd debiai/frontend
npm install
npm run serve
```

### Backend

And finally, in a new terminal, run the backend server.

```bash
cd debiai/backend
pip install -r requirements.txt
python3 websrv.py
```

DebiAI will be available at the backend url : [http://localhost:3000/](http://localhost:3000/)

The backend expect the frontend to be at the url [http://localhost:8080/](http://localhost:8080/). If the frontend is running on a different url, you can edit the `websrv.py` file to change it.

If something went wrong, please let us know by posting an issue on [Github](https://github.com/debiai/debiai/issues/new)

If you want to contribute to the project, you can follow our [contributing guide](https://github.com/debiai/debiai/blob/main/CONTRIBUTING.md).