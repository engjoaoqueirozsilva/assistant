# Usar uma imagem oficial do Node.js
FROM node:16

# Definir diretório de trabalho dentro do container
WORKDIR /app

# Copiar o arquivo de dependências (package.json e package-lock.json)
COPY package.json package-lock.json ./

# Instalar as dependências do Node.js diretamente durante a construção do container
RUN npm install

# Copiar o restante dos arquivos da aplicação para o diretório de trabalho no container
COPY . .

# Expor a porta que o servidor Node.js irá usar
EXPOSE 3000

# Comando para rodar a API Node.js
CMD ["node", "server.js"]
