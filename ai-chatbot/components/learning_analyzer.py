# from langchain.chains import LLMChain
# from langchain.prompts import PromptTemplate
# from langchain.chat_models import ChatOpenAI
# import os

# def get_learning_analyzer():
#     llm = ChatOpenAI(openai_api_key=os.getenv("OPENAI_API_KEY"), temperature=0.5)
#     prompt = PromptTemplate.from_template("Analyze student response: {response}. Use Bloom's taxonomy.")
#     chain = LLMChain(llm=llm, prompt=prompt)
#     return chain