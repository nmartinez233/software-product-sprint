// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ["I'm originally from the suburbs of Chicago!", "I'm the youngest sibling!", 
      "I skipped kindergarten!", "The longest road trip I've taken was 4 days to get to Mexico!"];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

async function sayHello() {
  const responseFromServer = await fetch('/hello2');
  const languages = await responseFromServer.json();

  const hello = languages[Math.floor(Math.random() * languages.length)];
  
  const statsListElement = document.getElementById('hello-container');
  statsListElement.innerHTML = '';

  statsListElement.appendChild(
      createListElement('Language: ' + hello.lang));
  statsListElement.appendChild(
      createListElement('Say hello in ' + hello.lang +'! '+ hello.greeting));
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
