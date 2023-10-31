pipeline {
    agent any

    stages {
        stage('Clonar o repositorio') {
            steps {
                git : 'main', url: 'https://github.com/Michelecorrea/EBAC-MOBILE-TESTE.git'
            }
        }
        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }
        stage('Executar testes') {

        
            steps {
                bat 'npm run wdio'
            }
        }
    }
}