# GitHub Actions - Build, Push e Deploy no Kubernetes

Este repositório contém uma pipeline configurada no GitHub Actions para realizar o build, push e deploy de uma imagem Docker para um ambiente Kubernetes, utilizando o Artifact Registry da Google Cloud Platform (GCP).

## Funcionalidades

- **Build da imagem Docker**
- **Push para o Artifact Registry da GCP**
- **Deploy automatizado para o cluster Kubernetes**

## Configuração Inicial

### Ajustando as Secrets no Repositório do GitHub
1. **Adicionar a chave JSON da Service Account da GCP**
   - Crie uma secret no repositório com o nome `GOOGLE_APPLICATION_CREDENTIALS` e insira o conteúdo do arquivo JSON da Service Account.
2. **Adicionar o código do projeto da GCP**
   - Crie uma secret no repositório com o nome `PROJECT_ID` e insira o ID do projeto.
3. **Copiar o kubeconfig da master para uma secret**
   - Crie uma secret no repositório com o nome `KUBECONFIG_SECRET`.
   - Substitua `https://k8s-master-01:6443` pelo IP externo da master: `https://IPEXTERNODAMASTER:6443`.

![image](https://github.com/user-attachments/assets/7530b32a-80bc-4c0a-89cf-4d2978e8d585)

### Criar um Repositório no Artifact Registry da GCP
1. Escolha um nome para o repositório.
2. Marque o formato como **Docker**.
3. Selecione o **modo padrão**.
4. Defina o tipo de local como **região**.
5. Mantenha o restante das opções como padrão, exceto a verificação de vulnerabilidades, que deve ser desativada.

![image](https://github.com/user-attachments/assets/2089f7cb-e97a-42cd-abe3-b4d8234a864e)

### Ajustar o Arquivo do Workflow
1. Altere `NOMEAPLICACAO` para o nome desejado para sua aplicação.
2. A versão será gerada automaticamente pela GitHub Action.
3. Configure `REGION` conforme a região escolhida no Artifact Registry.
4. Configure `REPOSITORIO` com o nome do repositório criado no Artifact Registry.
5. Configure `SAEMAIL` com o e-mail da Service Account criada na GCP.

## Executando a Pipeline

### Rodando a Pipeline no GitHub Actions
1. Acesse a aba **Actions** no repositório.
2. Execute o workflow **Deploy**.
3. Verifique no Rancher ou na master se os pods da aplicação foram iniciados com sucesso.
   - Utilize o comando:
     ```bash
     kubectl get pods
     ```

![image](https://github.com/user-attachments/assets/a75cb0b1-50a1-4b2a-930c-a902c80d08ba)

![image](https://github.com/user-attachments/assets/9c5f6261-4790-4fd0-bc3d-25708d94b60a)


---

## Prontinho, agora você já deve ter uma aplicação automatizada com essa pipeline acessando pelo IP público do Node da Pod mais a porta do service (NodePort), conforme exemplo abaixo

![image](https://github.com/user-attachments/assets/43bc66be-e3dd-42f2-83c1-3bc070e02a47)
