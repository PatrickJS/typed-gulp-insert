// Type definitions for vinyl-source-stream
// Project: https://github.com/rschmukler/gulp-insert
// Definitions by: Jeff Whelpley <https://github.com/jeffwhelpley>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface GulpInsert {
  append(str: String): NodeJS.ReadWriteStream;
}

var insert: GulpInsert;

export = insert;
