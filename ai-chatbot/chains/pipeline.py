from components.educational_retriever import get_educational_chain
from components.adaptive_conversation import get_conversation_chain
from components.content_generator import get_generator_chain
from components.learning_analyzer import get_analyzer_chain

# Initialize chains
educational_chain = get_educational_chain()
conversation_chain = get_conversation_chain()
generator_chain = get_generator_chain()
analyzer_chain = get_analyzer_chain()

def run_educational_workflow(user_query: str, student_profile: dict) -> dict:
    """
    Orchestrates the full educational assistant workflow:
    1. Retrieves curriculum content
    2. Generates personalized explanation
    3. Creates practice materials
    4. Analyzes learning engagement
    """

    # Step 1: Retrieve relevant educational content
    retrieved_content = educational_chain.run(user_query)

    # Step 2: Generate adaptive explanation
    explanation = conversation_chain.run({
        "content": retrieved_content,
        "student_profile": student_profile,
        "user_query": user_query
    })

    # Step 3: Generate practice materials
    practice_materials = generator_chain.run({
        "content": retrieved_content,
        "student_profile": student_profile
    })

    # Step 4: Analyze learning engagement
    analysis = analyzer_chain.run({
        "content": retrieved_content,
        "student_profile": student_profile
    })

    # Final output
    return {
        "retrieved_content": retrieved_content,
        "explanation": explanation,
        "practice_materials": practice_materials,
        "analysis": analysis
    }

# Optional test block
if __name__ == "__main__":
    query = "Explain the water cycle for a 6th grader"
    profile = {
        "grade": 6,
        "learning_style": "visual",
        "prior_knowledge": "basic",
        "engagement_level": "medium"
    }

    result = run_educational_workflow(query, profile)

    print("\n📘 Explanation:\n", result["explanation"])
    print("\n📝 Practice Materials:\n", result["practice_materials"])
    print("\n📊 Learning Analysis:\n", result["analysis"])