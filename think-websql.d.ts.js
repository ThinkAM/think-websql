function openDb(name, version, displayName, estimatedSize, creationCallback) {
    return openDatabase(name, version, displayName, estimatedSize, creationCallback);
}

var WindowDatabase = {
    openDatabase: openDb
};

var ThinkWebSql = {
    windowDatabase: WindowDatabase
};