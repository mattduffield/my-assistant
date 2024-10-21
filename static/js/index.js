export class Index {
  
  constructor() {
    this.checkAssistantAvailable();
    this.assistant = null;
    this.input = document.getElementById('input');
    this.output = document.getElementById('output');
    this.submit = document.getElementById('submit');
    this.container = document.querySelector('.container');
    this.submit.addEventListener('click', this.runAssistant.bind(this));
  }
  
  async checkAssistantAvailable() {
    this.assistantCapable = (await ai.languageModel.capabilities()).available;
    console.log('Assistant available: ', this.assistantCapable);
  }

  async runAssistant(e) {    
    const value = this.input.value.trim();
    this.output.textContent += `#${value}\n\nAnswer: `;
    this.submit.innerHTML = `
      <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    `;
    this.submit.disabled = true;

    try {
	    const stream = await this.askPrompt(value);
      let previous = '';
	    for await (const chunk of stream) {
        const partialResults = chunk.slice(previous.length);
        this.output.textContent += partialResults;
        this.container.scrollTop = this.container.scrollHeight;
        previous = chunk;
	    }
    } catch(ex) {
      this.output.textContent += ex.message;
      console.log(ex);
    }
    this.output.textContent += `\n\n`;
    this.submit.disabled = false;
    this.submit.textContent = 'Go';
    this.input.value = '';
    this.input.focus();
  }

  async askPrompt(prompt) {
    if (this.assistant) {
      this.assistant.destroy();
    }
    this.assistant = await window.ai.languageModel.create();
    // this.assistant = await window.ai.languageModel.create({
    //   systemPrompt: `Talk to me like a pirate.`
    // });
    const stream = this.assistant.promptStreaming(prompt);
    return stream;
  }

}

const app = new Index();
window.app = app;
