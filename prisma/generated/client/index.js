
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.8.1
 * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
 */
Prisma.prismaVersion = {
  client: "5.8.1",
  engine: "78caf6feeaed953168c64e15a249c3e9a033ebe2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  userName: 'userName',
  email: 'email',
  password: 'password',
  createDate: 'createDate',
  updateDate: 'updateDate'
};

exports.Prisma.FriendScalarFieldEnum = {
  friendOfId: 'friendOfId',
  friendId: 'friendId'
};

exports.Prisma.FriendRequestScalarFieldEnum = {
  friendRequestOfId: 'friendRequestOfId',
  friendRequestId: 'friendRequestId'
};

exports.Prisma.FeedbackSectionScalarFieldEnum = {
  id: 'id',
  authorId: 'authorId',
  description: 'description',
  type: 'type'
};

exports.Prisma.FeedbackScalarFieldEnum = {
  id: 'id',
  name: 'name',
  feedbackSectionId: 'feedbackSectionId'
};

exports.Prisma.UserToFeedbackSectionScalarFieldEnum = {
  userId: 'userId',
  feedbackSectionId: 'feedbackSectionId',
  role: 'role'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  Friend: 'Friend',
  FriendRequest: 'FriendRequest',
  FeedbackSection: 'FeedbackSection',
  Feedback: 'Feedback',
  UserToFeedbackSection: 'UserToFeedbackSection'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Kornel\\OneDrive\\Pulpit\\NEXT\\product-feedback-app\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.8.1",
  "engineVersion": "78caf6feeaed953168c64e15a249c3e9a033ebe2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "ciName": "Vercel",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "POSTGRES_PRISMA_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiCiAgdXJsID0gZW52KCJQT1NUR1JFU19QUklTTUFfVVJMIikgLy8gdXNlcyBjb25uZWN0aW9uIHBvb2xpbmcKICBkaXJlY3RVcmwgPSBlbnYoIlBPU1RHUkVTX1VSTF9OT05fUE9PTElORyIpIC8vIHVzZXMgYSBkaXJlY3QgY29ubmVjdGlvbgp9CgoKbW9kZWwgVXNlcnsKICBpZCBTdHJpbmcgQGlkIEBkZWZhdWx0KGN1aWQoKSkKICB1c2VyTmFtZSBTdHJpbmcKICBlbWFpbCBTdHJpbmcKICBwYXNzd29yZCBTdHJpbmc/CiAgY3JlYXRlRGF0ZSBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKICB1cGRhdGVEYXRlIERhdGVUaW1lIEB1cGRhdGVkQXQKICBmZWVkYmFja1NlY3Rpb25zIFVzZXJUb0ZlZWRiYWNrU2VjdGlvbltdCiAgZnJpZW5kT2YgRnJpZW5kW10gQHJlbGF0aW9uKCJmcmllbmRPZiIpCiAgZnJpZW5kcyAgRnJpZW5kW10gQHJlbGF0aW9uKCJmcmllbmRzIikKICBmcmllbmRSZXF1ZXN0T2YgRnJpZW5kUmVxdWVzdFtdIEByZWxhdGlvbigiZnJpZW5kUmVxdWVzdE9mIikKICBmcmllbmRSZXF1ZXN0IEZyaWVuZFJlcXVlc3RbXSBAcmVsYXRpb24oImZyaWVuZFJlcXVlc3QiKQp9CgoKbW9kZWwgRnJpZW5kIHsKICBmcmllbmRPZklkIFN0cmluZwogIGZyaWVuZElkICBTdHJpbmcKICBmcmllbmRPZiAgIFVzZXIgQHJlbGF0aW9uKCJmcmllbmRPZiIsIGZpZWxkczogW2ZyaWVuZE9mSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGZyaWVuZHMgICAgVXNlciBAcmVsYXRpb24oImZyaWVuZHMiLCBmaWVsZHM6IFtmcmllbmRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgQEBpZChbZnJpZW5kSWQsIGZyaWVuZE9mSWRdKQp9Cgptb2RlbCBGcmllbmRSZXF1ZXN0ewogIGZyaWVuZFJlcXVlc3RPZklkIFN0cmluZwogIGZyaWVuZFJlcXVlc3RJZCBTdHJpbmcKICBmcmllbmRSZXF1ZXN0T2YgVXNlciBAcmVsYXRpb24oImZyaWVuZFJlcXVlc3RPZiIsIGZpZWxkczogW2ZyaWVuZFJlcXVlc3RPZklkXSwgcmVmZXJlbmNlczogW2lkXSkKICBmcmllbmRSZXF1ZXN0IFVzZXIgQHJlbGF0aW9uKCJmcmllbmRSZXF1ZXN0IiwgZmllbGRzOiBbZnJpZW5kUmVxdWVzdElkXSwgcmVmZXJlbmNlczogW2lkXSkKICBAQGlkKFtmcmllbmRSZXF1ZXN0SWQsIGZyaWVuZFJlcXVlc3RPZklkXSkKfQoKCm1vZGVsIEZlZWRiYWNrU2VjdGlvbiB7CiAgaWQgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdChjdWlkKCkpCiAgLy8gYXV0aG9yICAgIFVzZXIgICAgIEByZWxhdGlvbihmaWVsZHM6IFthdXRob3JJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgYXV0aG9ySWQgIFN0cmluZwogIGRlc2NyaXB0aW9uIFN0cmluZwogIHR5cGUgU3RyaW5nCiAgZmVlZGJhY2tzICAgRmVlZGJhY2tbXQogIHVzZXJzICAgICAgIFVzZXJUb0ZlZWRiYWNrU2VjdGlvbltdCn0KCgptb2RlbCBGZWVkYmFjayB7CiAgaWQgU3RyaW5nICBAaWQgQGRlZmF1bHQoY3VpZCgpKQogIG5hbWUgU3RyaW5nCiAgLy8gZmVlZGJhY2tTZWN0aW9ucyBGZWVkYmFja1RvRmVlZGJhY2tTZWN0aW9uW10KICBmZWVkYmFja1NlY3Rpb25JZCAgU3RyaW5nCiAgZmVlZGJhY2tTZWN0aW9uICAgIEZlZWRiYWNrU2VjdGlvbiAgQHJlbGF0aW9uKGZpZWxkczogW2ZlZWRiYWNrU2VjdGlvbklkXSwgcmVmZXJlbmNlczogW2lkXSkKfQoKCm1vZGVsIFVzZXJUb0ZlZWRiYWNrU2VjdGlvbiB7CiAgdXNlcklkICAgU3RyaW5nCiAgZmVlZGJhY2tTZWN0aW9uSWQgU3RyaW5nCiAgdXNlciAgVXNlciBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICBmZWVkYmFja1NlY3Rpb24gIEZlZWRiYWNrU2VjdGlvbiAgQHJlbGF0aW9uKGZpZWxkczogW2ZlZWRiYWNrU2VjdGlvbklkXSwgcmVmZXJlbmNlczogW2lkXSkKICByb2xlIFN0cmluZwogIEBAaWQoW3VzZXJJZCwgZmVlZGJhY2tTZWN0aW9uSWRdKQp9CgoKCgoKLy8gbW9kZWwgRmVlZGJhY2tUb0ZlZWRiYWNrU2VjdGlvbiB7Ci8vICAgZmVlZGJhY2tTZWN0aW9uICAgRmVlZGJhY2tTZWN0aW9uIEByZWxhdGlvbihmaWVsZHM6IFtmZWVkYmFja1NlY3Rpb25JZF0sIHJlZmVyZW5jZXM6IFtpZF0pCi8vICAgZmVlZGJhY2tTZWN0aW9uSWQgU3RyaW5nCi8vICAgZmVlZGJhY2sgICBGZWVkYmFjayBAcmVsYXRpb24oZmllbGRzOiBbZmVlZGJhY2tJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCi8vICAgZmVlZGJhY2tJZCBTdHJpbmcKLy8gICBAQGlkKFtmZWVkYmFja1NlY3Rpb25JZCwgZmVlZGJhY2tJZF0pCi8vIH0KCgoKCi8vIG1vZGVsIEFjY2Vzc2libGVGZWVkYmFja1NlY3Rpb24gewovLyAgIHVzZXIgICAgICAgICAgICBVc2VyIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQovLyAgIHVzZXJJZCAgICAgICAgICBTdHJpbmcKLy8gICBmZWVkYmFja1NlY3Rpb24gRmVlZGJhY2tTZWN0aW9uIEByZWxhdGlvbihmaWVsZHM6IFtmZWVkYmFja1NlY3Rpb25JZF0sIHJlZmVyZW5jZXM6IFtpZF0pCi8vICAgZmVlZGJhY2tTZWN0aW9uSWQgU3RyaW5nCi8vICAgQEBpZChbdXNlcklkLCBmZWVkYmFja1NlY3Rpb25JZF0pCi8vIH0=",
  "inlineSchemaHash": "68269911e5a33e5dded7669a8cacd3fe4062314e2b18fa086ba00e6a5461fd7e",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/client",
    "generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"feedbackSections\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserToFeedbackSection\",\"relationName\":\"UserToUserToFeedbackSection\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friendOf\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Friend\",\"relationName\":\"friendOf\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friends\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Friend\",\"relationName\":\"friends\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friendRequestOf\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FriendRequest\",\"relationName\":\"friendRequestOf\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friendRequest\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FriendRequest\",\"relationName\":\"friendRequest\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Friend\":{\"dbName\":null,\"fields\":[{\"name\":\"friendOfId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friendId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friendOf\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"friendOf\",\"relationFromFields\":[\"friendOfId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friends\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"friends\",\"relationFromFields\":[\"friendId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"friendId\",\"friendOfId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FriendRequest\":{\"dbName\":null,\"fields\":[{\"name\":\"friendRequestOfId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friendRequestId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friendRequestOf\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"friendRequestOf\",\"relationFromFields\":[\"friendRequestOfId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friendRequest\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"friendRequest\",\"relationFromFields\":[\"friendRequestId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"friendRequestId\",\"friendRequestOfId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FeedbackSection\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"feedbacks\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Feedback\",\"relationName\":\"FeedbackToFeedbackSection\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserToFeedbackSection\",\"relationName\":\"FeedbackSectionToUserToFeedbackSection\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Feedback\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"feedbackSectionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"feedbackSection\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FeedbackSection\",\"relationName\":\"FeedbackToFeedbackSection\",\"relationFromFields\":[\"feedbackSectionId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserToFeedbackSection\":{\"dbName\":null,\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"feedbackSectionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserToUserToFeedbackSection\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"feedbackSection\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FeedbackSection\",\"relationName\":\"FeedbackSectionToUserToFeedbackSection\",\"relationFromFields\":[\"feedbackSectionId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"userId\",\"feedbackSectionId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/generated/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client/schema.prisma")
