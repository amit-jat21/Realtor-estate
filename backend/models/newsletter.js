const NewsletterSchema = new mongoose.Schema({
    email: String,
  });
  
  module.exports = mongoose.model('Newsletter', NewsletterSchema);