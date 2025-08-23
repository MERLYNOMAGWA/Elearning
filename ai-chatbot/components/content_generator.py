from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain.chat_models import ChatOpenAI
import os

def get_content_generator():
    llm = ChatOpenAI(openai_api_key=os.getenv("OPENAI_API_KEY"), temperature=0.8)
    prompt = PromptTemplate.from_template("Generate a {type} for {topic} at {level} level.")
    chain = LLMChain(llm=llm, prompt=prompt)
    return chain