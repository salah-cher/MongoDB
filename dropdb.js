#delete all mongodbs except admin and local
#to run it use mongo < dropdb.js

var databases = db.getMongo().getDBNames()
for(var i in databases){
    db = db.getMongo().getDB( databases[i] );
    if(db.getName() == "admin" || db.getName() == "local"){
        print("skipping db " + db.getName())
        continue
    }
    print( "dropping db " + db.getName() );
    db.dropDatabase();
}
