echo "DESAFIO: $1 criado com sucesso!" &&
mkdir $1 &&
touch $1/ex.$2 &&
touch $1/readme.md

# ./createDir.sh [file-name] [extension]