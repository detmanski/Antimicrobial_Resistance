## Imports
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

# Regions
class Regions(Base):
    __tablename__ = 'regions'

    id = Column(Integer, primary_key=True)
    region = Column(String(50))

# Countries
class Countries(Base):
    __tablename__ = 'countries'

    id = Column(Integer, primary_key=True)
    region_id = Column(Integer, ForeignKey("regions.id"))
    country = Column(String(50))
    country_code = Column(String(2))
    latitude = Column(Float)
    longitude = Column(Float)

# Health spending
class Spending_pop(Base):
    __tablename__ = "spending_pop"

    id = Column(Integer, primary_key=True)
    country_id = Column(Integer, ForeignKey("countries.id"))
    region_id = Column(Integer, ForeignKey("regions.id"))
    country = Column(String(50))
    code = Column(String(3))
    income = Column(String(12))
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
    measure_name = Column(String(40))
    location_id = Column(Integer)
    location_name = Column(String(50))
    sex_id = Column(Integer)
    sex_name = Column(String(4))
    age_group_id = Column(Integer)
    age_group_name = Column(String(20))
    cause_id = Column(Integer)
    cause_name = Column(String(10))
    year_id = Column(Integer)
    metric_id = Column(Integer)
    metric_name = Column(String(4))
    infectious_syndrome = Column(String(80))
    pathogen = Column(String(30))
    antibiotic_class = Column(String(60))
    counterfactual = Column(String(30))
    val = Column(Float)
    upper = Column(Float)
    lower = Column(Float)