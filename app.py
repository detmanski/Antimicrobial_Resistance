#################################################
# Imports
#################################################

from sqlalchemy import create_engine, func
from sqlalchemy.orm import Session
from sqlalchemy.ext.automap import automap_base

from flask import Flask, jsonify

#################################################
# Database Setup
#################################################
# Establishes the base filepath to find the database
## NOTE: This will be different for each computer
filepath = "C:/Users/kronh/OneDrive/Documents/UofTCoding_bootcamp/project_3_data"

# Create engine using the 'amr.sqlite' database file
engine = create_engine(f"sqlite:///{filepath}/database/amr.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save references to the tables
Regions = Base.classes.regions
Countries = Base.classes.countries
SpendingPop = Base.classes.spending_pop
AMR_data = Base.classes.amr_data

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################

@app.route("/")
def home():
    print("Homepage has been accessed")
    return (
            f"Welcome to the antimicrobial resistance (AMR) impact API<br/>"
            f"Available paths:<br/>"
            f"/api/v1.0/alldata<br/>"
            f"• Returns all data in JSON format without any filters; this takes a very long time to load and may require reloading<br/>"

            # f"/api/v1.0/map<br/>"
            # f"• Shows a map of antimicrobial resistance impact for different global regions<br/>"
            f"Sources are as follows:<br/>"
            f"The AMR dataset and analysis come from 'Global burden of bacterial antimicrobial resistance in 2012: a systematic analysis<br/>"
            f"by Murray et. al.<br/>"
            f"https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)02724-0/fulltext<br/>"
            f"The health spending and population data come from the World Health Organization<br/>"
            f"https://apps.who.int/nha/database<br/>"
    )

@app.route("/api/v1.0/alldata")
def dashboard():
    print("The alldata endpoint has been accessed")

    # Start a session
    session = Session(engine)

    # Query the database 
    country_data = session.query(Countries).all()
    region_data = session.query(Regions).all()
    spending_pop_data = session.query(SpendingPop).all()
    amr_data = session.query(AMR_data).all()

    # Close the session
    session.close()

    # Turn Countries into a list of dictionaries
    countries = []
    for item in country_data:
        row_dict = {}
        row_dict['id'] = item.id
        row_dict['region_id'] = item.region_id
        row_dict['country'] = item.country
        countries.append(row_dict)
    
    # Turn Regions into a list of dictionaries
    regions = []
    for item in region_data:
        row_dict = {}
        row_dict['id'] = item.id
        row_dict['region'] = item.region
        regions.append(row_dict)

    # Turn Health Spending into a list of dictionaries
    spending_pop = []
    for item in spending_pop_data:
        row_dict = {}
        row_dict['id'] = item.id
        row_dict['country_id'] = item.country_id
        row_dict['region_id'] = item.region_id
        row_dict['country'] = item.country
        row_dict['code'] = item.code
        row_dict['income'] = item.income
        row_dict['year'] = item.year
        row_dict['health_spending_mil_USD'] = item.health_spending_mil_USD
        row_dict['population_thousands'] = item.population_thousands
        row_dict['health_spending_per_capita_USD'] = item.health_spending_per_capita_USD
        spending_pop.append(row_dict)

    # Turn Health Spending into a list of dictionaries
    amr = []
    for item in amr_data:
        row_dict = {}
        row_dict['id'] = item.id
        row_dict['region_id'] = item.region_id
        row_dict['measure_id'] = item.measure_id
        row_dict['measure_name'] = item.measure_name
        row_dict['location_id'] = item.location_id
        row_dict['location_name'] = item.location_name
        row_dict['sex_id'] = item.sex_id
        row_dict['sex_name'] = item.sex_name
        row_dict['age_group_id'] = item.age_group_id
        row_dict['age_group_name'] = item.age_group_name
        row_dict['cause_id'] = item.cause_id
        row_dict['cause_name'] = item.cause_name
        row_dict['year_id'] = item.year_id
        row_dict['metric_id'] = item.metric_id
        row_dict['metric_name'] = item.metric_name
        row_dict['infectious_syndrome'] = item.infectious_syndrome
        row_dict['pathogen'] = item.pathogen
        row_dict['antibiotic_class'] = item.antibiotic_class
        row_dict['counterfactual'] = item.counterfactual
        row_dict['val'] = item.val
        row_dict['upper'] = item.upper
        row_dict['lower'] = item.lower
        amr.append(row_dict)

    # Make a dictionary to hold all tables and adds each list of dictionaries to the main dictionary
    all_data = {}
    all_data['countries'] = countries
    all_data['regions'] = regions
    all_data['spending_population'] = spending_pop
    all_data['AMR_data'] = amr

    # Jsonify data and return it
    return jsonify(all_data)


    # # Query the database for spending, population, and AMR data
    # data = session.query(
    #     Spending_pop.region_id, 
    #     func.count(Spending_pop.health_spending_mil_USD), 
    #     func.count(Spending_pop.population_thousands)
    # ).groupby(Spending_pop.year, Spending_pop.region_id)


#################################################
# Run the App
#################################################

if __name__ == '__main__':
    app.run(debug=True)