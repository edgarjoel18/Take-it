import React from 'react';

function Feed() {
  let data = {};
  data.title = document.getElementById('input-title').value;
  data.type = document.getElementById('input-type').value;
  data.price = document.getElementById('input-price').value;

  //Needs api calls
  //Needs dropdown menu for filtering
 
  return (
    <div className="feedItems">

      <h2>Feed Page</h2>

      <div className="postNew">
      <form>
        <p><h3 style="text-align:center">Create a New Posting</h3></p>

        <label htmlFor="title">Title</label>
        <input type="text" id="input-title" name="title" placeholder="Enter title here" required />

        <label htmlFor="type">Type</label>
        <input type ="text" id="input-type" name="type" placeholder="Enter type here" required />

        <label htmlFor="price">Price</label>
        <input type="price" id="input-price" name="price" placeholder="Enter price here" required />

        <input type="submit" id="submit" name="submit" value="submit" onClick={submitListing} />
      </form>
      </div>

      <div className="feed">
        <form>
          { listItems.map((item) => (
            <div key={item.title}>
              <p>title:</p><p>{item.title}</p>
              <p>type:</p><p>{item.type}</p>
              <p>price:</p><p>{item.price}</p>
            </div>
          ))}
        </form>
      </div>

    </div>
  );
}

export default Feed;
