import React from "react";
  const App = () => {
  return (
    <div>
  <main>
    <h1>CatPhotoApp</h1>
    <section>
      <h2>Cat Photos</h2>
      <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
      <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back." /></a>
    </section>
    <section>
      <h2>Cat Lists</h2>
      <h3>Things cats love:</h3>
      <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
      </ul>
      <figure>
        <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate." />
        <figcaption>Cats <em>love</em> lasagna.</figcaption>  
      </figure>
      <h3>Top 3 things cats hate:</h3>
      <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
      </ol>
      <figure>
        <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Five cats looking around a field." />
        <figcaption>Cats <strong>hate</strong> other cats.</figcaption>  
      </figure>
    </section>
    <section>
      <h2>Cat Form</h2>
      <form action="https://freecatphotoapp.com/submit-cat-photo">
        <fieldset>
          <legend>Is your cat an indoor or outdoor cat?</legend>
          <label><input id="indoor" type="radio" name="indoor-outdoor" defaultvalue="indoor" defaultchecked />Indoor</label>
          <label><input id="outdoor" type="radio" name="indoor-outdoor" defaultvalue="outdoor" /> Outdoor</label>
        </fieldset>
        <fieldset>
          <legend>What's your cat's personality?</legend>
          <input id="loving" type="checkbox" name="personality" defaultvalue="loving" defaultchecked /> <label htmlfor="loving">Loving</label>
          <input id="lazy" type="checkbox" name="personality" defaultvalue="lazy" /> <label htmlfor="lazy">Lazy</label>
          <input id="energetic" type="checkbox" name="personality" defaultvalue="energetic" /> <label htmlfor="energetic">Energetic</label>
        </fieldset>
        <input type="text" name="catphotourl" placeholder="cat photo URL" required />
        <button type="submit">Submit</button>
      </form>
    </section>
  </main>  
  </div>  
  
  );
  }

export default App;

