const {default: ollama} = require('ollama')

async function response(query){
    const response = await ollama.chat({
        model: 'llama2',
        messages: [{ role: 'user', content: query }]
    });
    return response.message.content;    
}

module.exports = response;