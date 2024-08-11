import { EventEmitter } from 'events';

class FSWatcher {
  constructor() {
    this.eventEmitter = new EventEmitter();
  }

  on(event, listener) {
    this.eventEmitter.on(event, listener);
  }

  emit(event, ...args) {
    this.eventEmitter.emit(event, ...args);
  }

  // Other methods that might trigger events
  simulateChange(filename) {
    this.emit('change', 'rename', filename);
  }

  simulateError(error) {
    this.emit('error', error);
  }
}

// Usage example:
const watcher = new FSWatcher();

watcher.on('change', (eventType, filename) => {
  console.log(`File changed: ${filename}`);
});

watcher.on('error', (error) => {
  console.error('Watcher error:', error);
});

// Simulating events
watcher.simulateChange('example.txt');
//watcher.simulateError(new Error('Something went wrong'));