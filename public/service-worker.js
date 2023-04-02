self.addEventListener('push', function(event){
    const body = event.data?.text()

    event.waitUntil(
        self.registration.showNotification('Loja de Serviços', {
            body,
            icon: 'https://www.uninabuco.edu.br/sites/joaquimnabuco.edu.br/files/fields/imagemLateral/noticias/2017/09/dicas-ser-administrador-sucesso.jpg'
        })
    )
})