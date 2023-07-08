class Clock {
    constructor() {
      this.state = {
        date: new Date()
      };
      this.timerId = null;
    }
  
    componentDidMount() {
      this.timerId = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerId);
    }
  
    tick() {
      this.state.date = new Date();
      this.render();
    }
  
    render() {
      const container = document.createElement('h2');
      const boldText = document.createElement('b');
      boldText.textContent = this.state.date.toLocaleTimeString();
      container.appendChild(boldText);
      
      // Assuming you have a container element with the ID 'clock-container'
      const clockContainer = document.getElementById('clock-container');
      clockContainer.innerHTML = '';
      clockContainer.appendChild(container);
    }
  }
  
  const clock = new Clock();
  clock.componentDidMount();
  
  // To simulate componentWillUnmount
  // call clock.componentWillUnmount() when you want to stop the clock.
  