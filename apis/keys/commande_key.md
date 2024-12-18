# commande pour créer la clé privée
ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key

# création de la version public 
ssh-keygen -e -m PEM -f jwtRS256.key > jwtRS256.key.pub