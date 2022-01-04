# ml-prototyping
## python

We will be using the tensorflow library. Before getting started you need to install python on your machine. On the latest windows version you need to simply type `python` in the command line and a window will open and guide you through the installation. On most unix machines python should be pre installed. Otherwise install it.

Before installing tensorflow and the other dependencies I strongly recommend you use some kind of virtual development environment (instead of installing everything globally). I personally like virtualenv. To install virtualenv execute this from your command line:

```bash
python3 -m pip install --user virtualenv
```

On windows you might get a warning that you need to add your python folder to the PATH. The easiest way is using the GUI, open windows start menu and type `PATH`, this should bring you to the window allowing you to modify ENVIRONMENTAL VARIABLES.

Then create a new environment for your ml-prototyping repo (if you are using a different version tha python 3.9 replace the version number):

```bash
cd python
virtualenv --python=python3.9 .env-ml-prototyping
```

To activate the new environment:

UNIX: 

```bash
source .env-ml-prototyping/bin/activate
```

WINDOWS:

```bash
.\.env-ml-prototyping\Scripts\activate
```

Afterwards, you should see the name of the environment in front of your command line input.


Next you need to install tensorflow, simply follow the guide here: https://www.tensorflow.org/install


On windows, installing tensorflow can throw errors, as i cannot cover all here, please consult google.

To enable GPU-support check for your system: https://www.tensorflow.org/install/gpu

## Install dependencies for examples

```bash
pip install -r requirements.txt
```

## Pre-Trained Models

We will be using pre-trained models, a good overview and example code can be found here: https://tfhub.dev/



