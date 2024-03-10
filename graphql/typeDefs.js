const { gql } = require('apollo-server');

module.exports = gql`
  type Post {     # so this alone is not doing something actually is an object defined which will be use in query
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }
  type Comment {            #object
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }
  type Like {            #object
    id: ID!
    createdAt: String!
    username: String!
  }
  type User {            #object
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {     # input object
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Query {       #these are functions that are going to be used and name on which logic will be written in resolvers
    getPosts: [Post]
    getPost(postId: ID!): Post
  }
  type Mutation {     #these are functions that are going to be used and name on which logic will be written in resolvers
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
  }
  type Subscription {      #these are used for webSockets thing
    newPost: Post!
  }
`;
