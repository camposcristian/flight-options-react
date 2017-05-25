
enum FlightCabin {
  First = 1,
  Business = 20,
  Ecomomy = 30,
  EcomomyStandard = 40,
  EconomyPremium = 50
}

interface Carrier {
  Id: number;
  Code: string;
  Name: string;
}

interface FlightOption {
  CarrierId: number;
  CarrierCode: string;

  AdultSaleTotal: number;
  ChildSaleTotal: number;
  InfantInLapSaleTotal: number;

  OutboundJourney: FlightJourney;
  InboundJourney: FlightJourney;
}

interface FlightJourney {
  Key: string;

  Cabin: FlightCabin;
  Availability: number;
  FareBasisCode: string;
  BookingClass: string;

  Segments: FlightSegment[];
}

interface FlightSegment {
  CarrierCode: string;
  FlightNo: string;
  Aircraft: string;

  OriginCode: string;
  DestinationCode: string;

  DepartureDate: string;
  ArrivalDate: string;

  FlightDuration: number;
  StopOverDuration: string;
}


