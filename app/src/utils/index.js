export const orderUpVotes = function order(a, b) {
  if (a.upvotes < b.upvotes) {
    return 1;
  }
  if (a.upvotes > b.upvotes) {
    return -1;
  }
  return 0;
};

export const orderComments = function order(a, b) {
  if (a.comments < b.comments) {
    return 1;
  }
  if (a.comments > b.comments) {
    return -1;
  }
  return 0;
};

export const orderDate = function order(a, b) {
  if (a.created_at < b.created_at) {
    return 1;
  }
  if (a.created_at > b.created_at) {
    return -1;
  }
  return 0;
};
