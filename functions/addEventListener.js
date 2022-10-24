let pseudoDocument = {
    events : {},
        addEventListener: function (events, aFunction){
            if (event === 'DOMContentLoaded'){
                aFunction(this.events)
            }
        }
}
pseudoDocument.addEventListener('DOMContentLoaded', function (event){ console.log(event) })