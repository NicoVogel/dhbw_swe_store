package dhbw.swe.server.rest;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import dhbw.swe.server.model.Customer;

/**
 * build all database calls and expose these though a rest api
 * @author nivogel
 *
 */

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "customer", path="customer")
public interface CustomerRepository extends PagingAndSortingRepository<Customer, Integer>{

}
