package dhbw.swe.server;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Produkt {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private int anzahl;
	private String bezeichnung;
	private String kathegorie;
	private double verkaufspreis;
	private double einkaufspreis;
	private String bezugsquelle;
	
}
