const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb+srv://tester47:K1jYlv9p9NZfDMiI@cluster0.yzmeoae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);
async function run() {
  try {
    const db = client.db('myDB');
    const coll = db.collection('books');
    // Query
    const data =  [
                    {
                      title: "Gilead", 
                      author: "Marilynne Robinson",
                      publisher: "Thorndike Press",
                      date: "November 2004",
                      website: "https://www.google.ca/books/edition/Gilead/EkQ9PgAACAAJ?hl=en"
                    },
                    {
                      title: "Zen and the Art of Motorcycle Maintenance",
                      author: "Robert M. Pirsig",
                      publisher: "William Morrow and Company",
                      date: "1974",
                      website: "https://www.goodreads.com/book/show/3501.Zen_and_the_Art_of_Motorcycle_Maintenance"
                    },
                    {
                      title: "The Motorcycle Diaries",
                      author: "Ernesto Guevara",
                      publisher: "Verso Books",
                      date: "1995",
                      website: "https://www.amazon.ca/Motorcycle-Diaries-Ernesto-Che-Guevara/dp/1859843659"
                    },
                    {
                      title: "Outlaw Motorcycle Gangs",
                      author: "William L. Dulaney and Kelly A. Cooney",
                      publisher: "CRC Press",
                      date: "2016",
                      website: "https://www.taylorfrancis.com/books/e/9781498733622"
                    },
                    {
                      title: "The Art of the Motorcycle",
                      author: "Dave Mucci",
                      publisher: "HarperCollins",
                      date: "2002",
                      website: "https://www.amazon.ca/Art-Motorcycle-Dave-Mucci/dp/0060510267"
                    },
                    {
                      title: "Riding in the Zone",
                      author: "Keith Code",
                      publisher: "Motorbooks International",
                      date: "2001",
                      website: "https://www.amazon.ca/Riding-Zone-Second-Keith-Code/dp/0760307400"
                    }

                  ];
    
    //delete collection
    db.collection('books').drop(function(err, delOK){
      if (err) throw err;
      if (delOK) console.log("Collection deleted");
    });

    const query = await coll.insertMany(data);
    console.log('Multiple document inserted');
  } finally { 
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);