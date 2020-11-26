module.exports = {
    client: "sqlite3", // Specify the DBMS
    useNullAsDefault: true, // A flag required for SQLite
    connection: {
        filename: "./data/produce.db3", // Location of the database file
    },
}