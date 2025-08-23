# chains/pipeline.py

from chains.educational_retriever import educational_chain
from chains.adaptive_conversation import conversation_chain
from chains.content_generator import generator_chain
from chains.learning_analyzer import analyzer_chain

def run_pipeline(topic: str, level: str, style: str, response: str) -> dict:
    retrieved = educational_chain.run(topic=topic, level=level)
    conversation = conversation_chain.run(input=retrieved)
    generated = generator_chain.run(topic=topic, level=level, type="quiz", style=style)
    analysis = analyzer_chain.run(response=response)

    return {
        "retrieved": retrieved,
        "conversation": conversation,
        "generated": generated,
        "analysis": analysis
    }