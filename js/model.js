const model = {
  conversations: null, // all conversation user joined
  currentConversation: null // conversation user selected
};

model.saveConversation = function(conversations) {
  model.conversations = conversations;
};

model.saveCurrentConversation = function(conversations) {
  model.currentConversation = conversations;
};
