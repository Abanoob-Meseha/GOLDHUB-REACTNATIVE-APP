export const userSchema = {
    name:'User',
    propreties:{
        _id: 'objectId', // Unique identifier for the user
        firebaseId: 'string?', // Firebase ID if this is a Firebase User.
        username: 'string', // username  (can be used for authentication)
        password: 'string', // Encrypted password (if using email/password authentication)
        brand: 'string', // Display name or username
        photoURL: 'string?', // URL to the user's profile picture (optional)
        phoneNumber: 'string?', // Phone number (optional)
        token:'string?',// Token from third-party provider (e.g., Google, Facebook)
        createdAt: 'date', // Timestamp when the user account was created
        updatedAt: 'date', // Timestamp when the user account was last updated
        clients: {'type':'array','item':'Client'},   // Array of Client objects representing third-party
        deals:{'type':'array', 'item':'Deal' },
    },
    primary_id:'_id'
}
