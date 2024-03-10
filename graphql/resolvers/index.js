const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const commentsResolvers = require('./comments');

module.exports = {
  Post: {     // so every post will be going through this
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length
  },
  Query: {      // every fucntion inside query class or object will be mentioned here
    ...postsResolvers.Query
  },
  Mutation: {      // every fucntion inside mutation class or object will be mentioned here
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation
  },
  Subscription: {      // every fucntion inside subscription class or object will be mentioned here
    ...postsResolvers.Subscription
  }
};
