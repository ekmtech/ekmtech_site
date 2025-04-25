const btnSend = document.getElementById('btnSend')

function GetData(){
    const txtNome = document.getElementById('modalName').value
    const txtEmail = document.getElementById('modalEmail').value
    const selectDev = document.getElementById('modalDevType').value
    const comoConheceu = document.getElementById('modalHowKnow').value
    const Prazo = document.getElementById('modalDeadline').value
    const Message = document.getElementById('modalMessage').value
    const formaPagamento = document.getElementById('modalPayment').value
    const arq = document.getElementById('modalFileUpload')
    const formData = new FormData()
    formData.append('file', arq.Files[0])
    
    const Email = {
        nome : txtNome,
        email : txtEmail,
        devType : selectDev,
        comoconheceu : comoConheceu,
        arquivo : formData,
        Prazo : Prazo,
        message : Message,
        Pagamento : formaPagamento
    }
    alert('ihrgfubnfm3');
}

btnSend.addEventListener('submit',(event)=>{
    event.preventDefault()
    alert('e dkef')
    GetData()
})