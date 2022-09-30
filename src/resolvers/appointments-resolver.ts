import { Resolver } from "type-graphql";
import { Arg, Mutation, Query } from "type-graphql/dist/decorators";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";
import { Appointment } from "../dtos/models/appointment-model";

@Resolver()
export class AppointmentsResolver {
  @Query(() => String)
  async helloWorld() {
    return "Hello World";
  }

  @Mutation(() => Appointment)
  async createAppointment(@Arg("data") data: CreateAppointmentInput) {
    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    };

    return appointment;
  }
}
