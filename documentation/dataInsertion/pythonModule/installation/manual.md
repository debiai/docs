
[<- Back to the quick start](../quickStart.md)
## Manual installation

### Requirements
* setuptools
* wheel
* pip


```bash
# Clone the module repository :
git clone https://github.com/debiai/debiai.git
cd py-debiai

# Build
./build_package.sh

# Install
pip install build_package/*.tar.gz
```
You can now use the DebiAI module inside your script with `from debiai import debiai`

### Update

```bash
cd py-debiai

git pull

./build_package.sh

pip install build_package/*.tar.gz
```

[<- Back to the quick start](../quickStart.md)
