## Imports
import csv
from sqlalchemy import Column, Integer, String, Float, ForeignKey, create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

## Setup
# Establishes the base filepath to find and write the data
## NOTE: This will be different for each computer
filepath = "C:/Users/kronh/OneDrive/Documents/UofTCoding_bootcamp/project_3_data"

# Creates and connects with the database
engine = create_engine(f'sqlite:///{filepath}/database/amr.sqlite')

# Sets up the Base class
Base = declarative_base()

# Regions
class Regions(Base):
    __tablename__ = 'regions'

    id = Column(Integer, primary_key=True)
    region = Column(String)

# Countries
class Countries(Base):
    __tablename__ = 'countries'

    id = Column(Integer, primary_key=True)
    region_id = Column(Integer, ForeignKey("regions.id"))
    country = Column(String)
    country_code = Column(String)
    latitude = Column(Float)
    longitude = Column(Float)

# Health spending
class Spending_pop(Base):
    __tablename__ = "spending_pop"

    id = Column(Integer, primary_key=True)
    country_id = Column(Integer, ForeignKey("countries.id"))
    region_id = Column(Integer, ForeignKey("regions.id"))
    country = Column(String)
    code = Column(String)
    income = Column(String)
    year = Column(Integer)
    health_spending_mil_USD = Column(Float)
    population_thousands = Column(Float)
    health_spending_per_capita_USD = Column(Float)
    
# AMR data
class AMR_data(Base):
    __tablename__ = "amr_data"

    id = Column(Integer, primary_key=True)
    region_id = Column(Integer, ForeignKey("regions.id"))
    measure_id = Column(Integer)
    measure_name = Column(String)
    location_id = Column(Integer)
    location_name = Column(String)
    sex_id = Column(Integer)
    sex_name = Column(String)
    age_group_id = Column(Integer)
    age_group_name = Column(String)
    cause_id = Column(Integer)
    cause_name = Column(String)
    year_id = Column(Integer)
    metric_id = Column(Integer)
    metric_name = Column(String)
    infectious_syndrome = Column(String)
    pathogen = Column(String)
    antibiotic_class = Column(String)
    counterfactual = Column(String)
    val = Column(Float)
    upper = Column(Float)
    lower = Column(Float)

## Database creation
# Drop tables if they already exist
Base.metadata.drop_all(engine)

# Create the schema
Base.metadata.create_all(engine)

# Create a session to interact with the database
Session = sessionmaker(bind=engine)
session = Session()

# Load data from regions csv file
with open(f"{filepath}/data_csv/regions.csv", 'r') as csvfile:
    regions = csv.DictReader(csvfile)
    for row in regions:
        region_data = Regions(id=row['id'], region=row['region'])
        session.add(region_data)

# Update the database
session.commit()

# Load data from countries csv file
with open(f"{filepath}/data_csv/countries.csv", 'r') as csvfile:
    countries = csv.DictReader(csvfile)
    for row in countries:
        country_data = Countries()
        if row['id']:
            country_data.id=row['id'] 
        if row['region_id']:
            country_data.region_id=row['region_id'] 
        if row['country']:
            country_data.country=row['country']
        if row['country_code']:
            country_data.country_code=row['country_code']
        if row['latitude']:
            country_data.latitude=row['latitude']
        if row['longitude']:
            country_data.longitude=row['longitude']
        session.add(country_data)

# Update the database
session.commit()

# Load data from health spending and population csv file
with open(f"{filepath}/data_csv/spending_pop.csv", 'r') as csvfile:
    spending = csv.DictReader(csvfile)
    for row in spending:
        spending_data = Spending_pop()
        if row['id']:
            spending_data.id=row['id']
        if row['country_id']: 
            spending_data.country_id=row['country_id'] 
        if row['region_id']: 
            spending_data.region_id=row['region_id'] 
        if row['country']: 
            spending_data.country=row['country'] 
        if row['code']: 
            spending_data.code=row['code'] 
        if row['income']: 
            spending_data.income=row['income'] 
        if row['year']: 
            spending_data.year=row['year'] 
        if row['health_spending_mil_USD']: 
            spending_data.health_spending_mil_USD=row['health_spending_mil_USD'] 
        if row['population_thousands']: 
            spending_data.population_thousands=row['population_thousands'] 
        if row['health_spending_per_capita_USD']: 
            spending_data.health_spending_per_capita_USD=row['health_spending_per_capita_USD']
        session.add(spending_data)

# Update the database
session.commit()

# Load data from countries csv file
with open(f"{filepath}/data_csv/IHME_AMR_BURDEN_2019_RATE_SK.csv", 'r') as csvfile:
    amr = csv.DictReader(csvfile)
    for row in amr:
        amr_data = AMR_data()
        if row['id']:
            amr_data.id=row['id'] 
        if row['region_id']:
            amr_data.region_id=row['region_id'] 
        if row['measure_id']:
            amr_data.measure_id=row['measure_id'] 
        if row['measure_name']:
            amr_data.measure_name=row['measure_name'] 
        if row['location_id']:
            amr_data.location_id=row['location_id'] 
        if row['location_name']:
            amr_data.location_name=row['location_name'] 
        if row['sex_id']:
            amr_data.sex_id=row['sex_id'] 
        if row['sex_name']:
            amr_data.sex_name=row['sex_name'] 
        if row['age_group_id']:
            amr_data.age_group_id=row['age_group_id'] 
        if row['age_group_name']:
            amr_data.age_group_name=row['age_group_name'] 
        if row['cause_id']:
            amr_data.cause_id=row['cause_id'] 
        if row['cause_name']:
            amr_data.cause_name=row['cause_name'] 
        if row['year_id']:
            amr_data.year_id=row['year_id'] 
        if row['metric_id']:
            amr_data.metric_id=row['metric_id'] 
        if row['metric_name']:
            amr_data.metric_name=row['metric_name'] 
        if row['infectious_syndrome']:
            amr_data.infectious_syndrome=row['infectious_syndrome'] 
        if row['pathogen']:
            amr_data.pathogen=row['pathogen'] 
        if row['antibiotic_class']:
            amr_data.antibiotic_class=row['antibiotic_class'] 
        if row['counterfactual']:
            amr_data.counterfactual=row['counterfactual'] 
        if row['val']:
            amr_data.val=row['val'] 
        if row['upper']:
            amr_data.upper=row['upper'] 
        if row['lower']:
            amr_data.lower=row['lower']
        session.add(amr_data)

# Update the database
session.commit()

# Close the session
session.close()