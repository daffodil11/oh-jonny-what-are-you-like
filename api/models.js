exports.fetchData = url => {
  return new Promise((resolve, reject) => {
    resolve({
      url,
      totalLinks: 20,
      brokenLinks: 5
    });
  });
};
